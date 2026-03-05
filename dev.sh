#!/bin/bash
set -e
echo "============================================"
echo "  DanMachi - 开发环境启动"
echo "  实时编译 + 酒馆热更新"
echo "============================================"
echo ""
cd "$(dirname "$0")"
pnpm watch
