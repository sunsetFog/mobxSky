class AnimationNumEaseOut {
  private options;
  private dec: number;
  private startTime: number;
  constructor(props: any) {
    this.dec = Math.pow(10, props.decimals);
    this.options = props;
    this.startTime = 0;
    this.easeOutExpo = this.easeOutExpo;
    this.count = this.count;
  }

  public count(timestamp: any) {
    if (!this.startTime) {
      this.startTime = timestamp;
    } // 记录开始时间为当前时间戳；
    this.options.timestamp = timestamp; // 记录每次动画执行的时间戳；
    const progress = timestamp - this.startTime; // 记录开始到现在的时间进度

    // 处理缓慢结束
    this.options.frameVal = this.easeOutExpo(
      progress,
      this.options.startVal,
      this.options.endVal - this.options.startVal,
      this.options.duration,
    );
    // 到达指定参数结束
    this.options.frameVal =
      this.options.frameVal > this.options.endVal ? this.options.endVal : this.options.frameVal;
    // 小数点处理
    this.options.frameVal = Math.round(this.options.frameVal * this.dec) / this.dec;

    // 返回处理后的数据
    this.options.callback(this.options.frameVal);

    // 没到目标参数继续动画
    if (progress < this.options.duration) {
      requestAnimationFrame((timestamp) => {
        this.count(timestamp);
      });
    }
  }

  // 处理规定时间内的缓动时间  t:当前以执行时间  b:起始数  c:开始到结束的总数 d:执行消耗的总时常
  private easeOutExpo(t: any, b: any, c: any, d: any) {
    return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b; // Math.pow(底数,几次方)
  }
}

export default AnimationNumEaseOut;
