---
layout: post
title: convolution based interpolation for fast, high quality rotation of images
---

这是一篇关于图像旋转的文章，从本文可以看到数学算法在图像领域中最优美的应用，不仅如此，文章也道尽了太多哲学思想，本文写于2015年，是高级图像处理这门课的课程作业，近日看到所谓[机器学习中体现的各种工程和科学的哲学思想](http://www.tensorinfinity.com/paper_116.html)，与本文中的内容相互印证，有所感悟，故整理本文重新编写。阅读本文以及相对应的文献，需要有很多先验知识铺垫，包括简单的三角公式、卷积、B-spline、插值、采样、傅立叶变换等，我会在本文中梳理所需要的知识，并给出总结。

----

## 图像旋转

众所周知，对一个图像进行旋转只需要进行简单的三角函数乘法$$\left[\begin{matrix}cos \theta & -sin \theta \\sin \theta & cos \theta\end{matrix}\right]$$即可，但是想要获得与原图一样的质量和精度是很困难的，原因在于：图像旋转之后仍然处于原来的坐标系中，图像仍然是离散的数据点，通过乘以一个三角函数，会出现小数的现象，无法与相对应的坐标对应，因此就出现了各种插值算法，通过将转换后图像的坐标旋转回原来的角度，然后进行最近邻插值、最小二次插值、B-spline插值等算法，将原来的像素值通过计算，从而得到旋转之后的像素值。

旋转图像的质量与插值模型的算法直接相关，对于最近邻插值、二阶线性插值等算法而言，这会造成图像中的明显的平滑（smoothing）或块状（blocking）缺陷（artifacts），为了获得较好的图像质量，我们需要更高阶的插值算法，但是由于这些算法的计算消耗太大，尤其在图片像素越来越大，直接通过旋转矩阵乘法来进行插值，就需要考虑非常复杂的2维插值方程。因此我们的解决办法就是将旋转矩阵分解成为多个步骤旋转矩阵，比如两步分解的旋转矩阵：

$$R(\theta)=\left[\begin{matrix}cos \theta & -sin \theta \\sin \theta & cos \theta\end{matrix}\right]=\left[\begin{matrix}1 & 0 \\tan \theta & \frac{1}{cos \theta}\end{matrix}\right] \times \left[\begin{matrix} cos \theta & -sin \theta \\t0 & 1 \end{matrix}\right]$$

从这个矩阵可以看到，

## 采样与插值

## 哲学思想