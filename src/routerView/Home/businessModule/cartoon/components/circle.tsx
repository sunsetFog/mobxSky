import React, { useEffect } from 'react';
import AnimationNumEaseOut from './AnimationNumEaseOut';
interface CircleProps {
  canvasElement: any;
  percent: number;
  foreColor: string;
  endForceColor: string;
  bgColor: string;
  width: number;
  height: number;
  time: number;
  lineWidth?: number;
  lineCap: string;
}

function drawMain({
  canvasElement,
  percent,
  foreColor,
  endForceColor,
  bgColor,
  width,
  height,
  time,
  lineWidth,
  lineCap,
}: CircleProps) {
  /*
   * @drawing_elem: 绘制对象
   * @percent：绘制圆环百分比, 范围[0, 100]
   * @forecolor: 绘制圆环的前景色，颜色代码
   * @bgcolor: 绘制圆环的背景色，颜色代码
   */
  const context = canvasElement.getContext('2d');
  const center_x = canvasElement.width / 2;
  const center_y = canvasElement.height / 2;
  const rad = (Math.PI * 2) / 100;

  const witdhElemet = canvasElement.width;
  const heightElemet = canvasElement.height;
  const scaleNumber = 1.2;
  canvasElement.style.width = witdhElemet + 'px';
  canvasElement.style.height = heightElemet + 'px';
  canvasElement.height = height * scaleNumber;
  canvasElement.width = width * scaleNumber;
  context.scale(scaleNumber, scaleNumber);

  // 绘制背景圆圈
  function backgroundCircle() {
    context.save();
    context.beginPath();
    context.lineWidth = lineWidth || 26; // 设置线宽
    const radius = center_x - context.lineWidth;
    context.lineCap = lineCap;
    context.strokeStyle = bgColor || 'transparent';
    context.arc(center_x, center_y, radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
    context.restore();
  }

  // 绘制运动圆环
  function foregroundCircle(n: any) {
    context.save();

    // 绘制渐变颜色
    const lineStyle = context.createLinearGradient(width, -88, 211, height); // 线性渐变的起止坐标
    lineStyle.addColorStop(0.3, foreColor); // 创建渐变的开始颜色，0表示偏移量，个人理解为直线上的相对位置，最大为1，一个渐变中可以写任意个渐变颜色
    lineStyle.addColorStop(0.7, endForceColor);

    context.strokeStyle = lineStyle;
    context.lineWidth = lineWidth || 26;
    context.lineCap = lineCap;
    const radius = center_x - context.lineWidth;
    context.beginPath();
    context.arc(center_x, center_y, radius, Math.PI / 2, Math.PI / 2 + n * rad, false); // 用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
    context.stroke();
    context.closePath();
    context.restore();
  }

  // 执行动画
  (function drawFrame() {
    requestAnimationFrame((timestamp) => {
      new AnimationNumEaseOut({
        startVal: 0,
        endVal: percent,
        decimals: 2,
        duration: time,
        callback: (num: any) => {
          context.clearRect(0, 0, canvasElement.width, canvasElement.height);
          backgroundCircle();
          foregroundCircle(num);
        },
      }).count(timestamp);
    });
  })();
}

interface Props {
  id: string;
  percent: number;
  foreColor: string;
  endForceColor: string;
  bgColor: string;
  width: number;
  height: number;
  time: number;
  lineWidth?: number;
  lineCap: string;
  start: boolean;
}

const Circle: React.FC<Props> = ({
  id,
  percent,
  foreColor,
  endForceColor,
  bgColor,
  width,
  height,
  time,
  lineWidth,
  lineCap,
  start,
}) => {
  useEffect(() => {
    const canvasElement = document.getElementById(id) as HTMLCanvasElement;
    if (!start) {
      if (canvasElement) {
        canvasElement.style.width = width + 'px';
        canvasElement.style.height = height + 'px';
        canvasElement.height = height;
        canvasElement.width = width;
      }

      return;
    }
    drawMain({
      canvasElement,
      percent,
      foreColor,
      endForceColor,
      bgColor,
      width,
      height,
      time,
      lineWidth,
      lineCap,
    });
  }, [start]);

  return (
    <div className='circle_progress_wraper'>
      <canvas id={id} className='circle_progress' width={width} height={height}></canvas>
    </div>
  );
};

export default Circle;
