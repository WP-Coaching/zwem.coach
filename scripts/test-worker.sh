#!/usr/bin/env bash
set -euo pipefail

worker_port="${WORKER_TEST_PORT:-8788}"
worker_url="http://127.0.0.1:${worker_port}"
worker_log=$(mktemp)
worker_response=$(mktemp)

WRANGLER_SEND_METRICS=false node node_modules/wrangler/bin/wrangler.js dev \
  --local --ip 127.0.0.1 --port "$worker_port" >"$worker_log" 2>&1 &
worker_pid=$!

cleanup() {
  worker_exit_status=$?
  if [[ "$worker_exit_status" != 0 ]]; then
    cat "$worker_log"
  fi
  kill "$worker_pid" 2>/dev/null || true
  wait "$worker_pid" 2>/dev/null || true
  rm -f "$worker_log" "$worker_response"
}
trap cleanup EXIT

# Wait for the runtime to listen. An HTTP 500 is ready to test, too.
for attempt in {1..30}; do
  if curl --silent --max-time 2 --output /dev/null "$worker_url/"; then
    break
  fi
  if ! kill -0 "$worker_pid" 2>/dev/null; then
    exit 1
  fi
  sleep 1
done

for route in / /algemene-voorwaarden /privacybeleid /__worker-smoke-missing; do
  expected_status=200
  if [[ "$route" == /__worker-smoke-missing ]]; then
    expected_status=404
  fi

  status=$(curl --silent --show-error --max-time 15 \
    --output "$worker_response" --write-out '%{http_code}' "$worker_url$route")
  echo "GET $route: $status (expected $expected_status)"
  [[ "$status" == "$expected_status" ]]
  # Require rendered HTML for both successful pages and the 404.
  [[ "$(<"$worker_response")" == *'<html'* ]]
done
