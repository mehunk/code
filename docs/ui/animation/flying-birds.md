# 夕阳飞鸟

## 最终效果

<FlyingBirds />

## 要点

- 背景图片滤镜效果的实现方式；
- 飞鸟的连续展翅动作的实现方式；
- 飞鸟的飞行轨迹的实现方式；

## 解析

### 背景图滤镜效果

```scss{8-11}
.container {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 35rem; /* 使用了 rem 单位 */
  /* 背景图使用两张图叠加，在图片上覆盖一个渐变颜色，让背景图变得更加昏暗 */
  background-image: linear-gradient(to bottom, rgba(255, 168, 76, 0.6) 0%, rgba(255, 123, 13, 0.6) 100%), url('https://images.unsplash.com/photo-1446824505046-e43605ffb17f');
  /* 神奇的魔法，图片的混合模式，应该是类似于滤镜之类的东西 */
  background-blend-mode: soft-light;
  background-size: cover;
  background-position: center;
}
```

## 源文件

<script setup>
import FlyingBirds from '../../../ui/animation/flying-birds/index.vue'
</script>
