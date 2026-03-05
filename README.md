# 🏰 在地下城寻求邂逅是否搞错了什么

> **DanMachi** — SillyTavern 角色前端卡  
> 基于《在地下城寻求邂逅是否搞错了什么》的同人二创项目，将纯文字角色卡升级为沉浸式前端交互体验。

---

## ✨ 已完成功能

- 🎬 **加载动画** — 三层旋转魔法阵 + 打字机文字效果
- 🏠 **首页菜单** — 开始游戏 / 读取存档 / 加载存档 / 游戏设置
- ⚔️ **角色选择** — 扮演贝尔·克朗尼（主角视角）或 路人A（自由视角）
- 🌟 **粒子背景** — Canvas 实时渲染金/蓝/紫三色发光粒子
- 📱 **响应式适配** — PC 与手机双端适配
- 🎨 **暗色奇幻风** — 深蓝暗紫渐变 + 金色点缀
- 📦 **酒馆模板集成** — 基于 tavern_helper_template，支持 Webpack 打包为单 HTML

## 📋 待完成功能

- [ ] 游戏主界面（选择角色后的互动场景）
- [ ] 存档系统（读取 / 保存 / 管理存档）
- [ ] 游戏设置界面（音量、字体、背景等配置）
- [ ] 角色立绘 & 场景图展示
- [ ] 剧情对话系统
- [ ] 角色能力面板（冒险者等级、技能、魔法）
- [ ] 背景音乐 & 音效
- [ ] 世界书集成（地下城层级、怪物图鉴）

---

## 🏗️ 项目结构

```
DanMachi/
├── src/danmachi/              # 项目源码
│   ├── index.html             # 页面骨架
│   ├── index.ts               # 入口脚本
│   ├── 界面.ts                # Vue 挂载 + Router
│   ├── 界面.vue               # 根组件
│   ├── components/            # 组件
│   │   ├── ParticleBackground.vue
│   │   ├── LoadingScreen.vue
│   │   └── MenuButton.vue
│   ├── views/                 # 视图
│   │   ├── HomePage.vue
│   │   └── CharacterSelect.vue
│   ├── styles/main.css        # 全局样式
│   └── utils/fonts.ts         # 字体注入
├── docs/                      # 参考资料（不参与打包）
│   ├── 示例/
│   └── 初始模板/
├── dist/                      # 打包输出
├── dev.bat / dev.sh           # 开发环境启动
├── build.bat / build.sh       # 生产打包
├── tavern_sync.yaml           # 角色卡同步配置
└── webpack.config.ts          # 打包配置
```

### 技术栈

- **框架**: Vue 3 + TypeScript
- **构建**: Webpack 5 (tavern_helper_template)
- **样式**: CSS 变量 + 关键帧动画 + 响应式
- **粒子系统**: Canvas 2D + requestAnimationFrame
- **酒馆集成**: tavern_sync + Socket.IO 热更新

---

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/Kaguya-1210/DanMachi.git
cd DanMachi

# 安装依赖
pnpm install

# 开发模式（实时编译 + 酒馆热更新）
pnpm watch

# 生产打包
pnpm build
```

---

## 👥 开发团队

| 角色 | 姓名 |
|------|------|
| 🧑‍💻 **策划 & 开发** | **W7insvnter** |
| 🤖 **AI 协作开发** | **Antigravity (Claude 4.6 Opus)** |

---

## 📄 许可证

本项目为同人二创作品，基于《在地下城寻求邂逅是否搞错了什么》（ダンジョンに出会いを求めるのは間違っているだろうか）。  
原作版权归 **大森藤ノ** / **SB Creative** 所有。
