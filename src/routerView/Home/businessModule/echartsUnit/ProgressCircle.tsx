import React from 'react';

interface ProgressCircleProps {
    progress: number; // 0 to 100
    radius?: number; // 圆的半径
    progressColor?: string[];
}

let NEXT_PUBLIC_PLATFORM = 'jn';

const ProgressCircle: React.FC<ProgressCircleProps> = ({
    progress,
    radius = 32,
    progressColor = ['#218BFF', '#00BFFF'],
}) => {
    // 颜色区分
    if (NEXT_PUBLIC_PLATFORM === 'hth' || NEXT_PUBLIC_PLATFORM === 'ayx') {
        progressColor = ['#CEA882', '#EDC69F'];
    }
    if (NEXT_PUBLIC_PLATFORM === 'jn') {
        progressColor = ['#597EF7', '#8CA7FF'];
    }
    // 创建一个基于属性的唯一ID,不然颜色无法渐变
    const gradientId = `progressGradient-${progressColor[0]}-${progressColor[1]}`;
    const centerX = 42; // 圆心的X坐标
    const centerY = 42; // 圆心的Y坐标

    // 计算周长, 已知半径为30
    const circumference = 2 * Math.PI * radius;
    const offset = ((100 - progress) / 100) * circumference;

    // 计算小白点的坐标
    // 这里减去 Math.PI / 2 是为了让进度从12点方向开始
    const angle = (progress / 100) * 2 * Math.PI - Math.PI / 2;
    const dotX = centerX + radius * Math.cos(angle);
    const dotY = centerY + radius * Math.sin(angle);
    // 使用模板字符串构建路径
    const pathData = `M ${centerX} ${centerY - radius}
            a ${radius} ${radius} 0 0 1 0 ${2 * radius}
            a ${radius} ${radius} 0 0 1 0 -${2 * radius}`;
    // 1.7rem
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='100px'
            height='100px'
            viewBox='0 0 84 84'
            fill='none'
        >
            <circle cx='42' cy='42' r={radius} stroke='#E3E4E6' strokeWidth='12' />
            <g filter='url(#filter0_d_148_79372)'>
                <path
                    d={pathData}
                    stroke={`url(#${gradientId})`} //使用动态生成的ID
                    strokeWidth='12'
                    strokeLinecap='round'
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </g>
            <circle cx={dotX} cy={dotY} r='4' fill='white' />
            <defs>
                <filter
                    id='filter0_d_148_79372'
                    x='0'
                    y='0'
                    width='84'
                    height='84'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    />
                    <feOffset dy='2' />
                    <feGaussianBlur stdDeviation='2' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
                    />
                    <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_148_79372'
                    />
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_148_79372'
                        result='shape'
                    />
                </filter>
                <linearGradient
                    id={gradientId}
                    x1='22.7609'
                    y1='74.55'
                    x2='29.9599'
                    y2='9.51073'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor={progressColor[0]} />
                    <stop offset='1' stopColor={progressColor[1]} />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default ProgressCircle;
