const canvasWidth = 170
const canvasHeight = 170
const clockRaduis = canvasWidth / 2 - 2

export default function drawClock(ctx) {
  //获取当前时间
  const time = new Date()
  const hour = time.getHours() % 12
  const minute = time.getMinutes()
  const sec = time.getSeconds()

  //保存初始状态
  ctx.save()
  //清除画布
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  //坐标系原点平移
  ctx.translate(canvasWidth / 2, canvasHeight / 2)
  ctx.save()

  ctx.font = '12px Arial'
  ctx.fillStyle = '#000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle'
  ctx.fillText('ghy', 0, clockRaduis * 0.3)

  //刻度
  ctx.beginPath();
  ctx.lineCap = "round"
  for (let i = 1; i <= 60; i++) {
    if (i % 5 === 0) {
      continue;
    }
    const theta = Math.PI * 2 / 60 * (i - 15)
    let x = clockRaduis * Math.cos(theta)
    let y = clockRaduis * Math.sin(theta)
    ctx.moveTo(x, y)
    x = (clockRaduis - 6) * Math.cos(theta)
    y = (clockRaduis - 6) * Math.sin(theta)
    ctx.lineTo(x, y)
  }
  ctx.closePath()
  ctx.lineWidth = 1
  ctx.strokeStyle = '#000'
  ctx.stroke()

  ctx.beginPath();
  ctx.lineCap = "round"
  for (let i = 1; i <= 12; i++) {
    const theta = Math.PI * 2 / 12 * (i - 3)
    let x = clockRaduis * Math.cos(theta)
    let y = clockRaduis * Math.sin(theta)
    ctx.moveTo(x, y)
    x = (clockRaduis - 9) * Math.cos(theta)
    y = (clockRaduis - 9) * Math.sin(theta)
    ctx.lineTo(x, y)
  }
  ctx.closePath()
  ctx.lineWidth = 2
  ctx.strokeStyle = '#000'
  ctx.stroke()

  //绘制时针
  ctx.rotate(2 * Math.PI / 12 * hour + 2 * Math.PI / 12 * (minute / 60) - Math.PI / 2)
  ctx.lineCap = "round"
  ctx.beginPath()
  ctx.moveTo(5, 0)
  ctx.lineTo(clockRaduis * 0.5, 0)
  ctx.shadowOffsetX = -2
  ctx.shadowColor = "#000"
  ctx.shadowBlur = 6
  ctx.lineWidth = 3
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
  ctx.save()

  //绘制分针
  ctx.rotate(2 * Math.PI / 60 * minute + 2 * Math.PI / 60 * (sec / 60) - Math.PI / 2)
  ctx.beginPath()
  ctx.lineCap = "round"
  ctx.moveTo(0, 0)
  ctx.lineTo(clockRaduis * 0.8, 0)
  ctx.shadowOffsetX = -2
  ctx.shadowColor = "#000"
  ctx.shadowBlur = 6
  ctx.lineWidth = 3
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
  ctx.save()

  //绘制秒针
  ctx.rotate(2 * Math.PI / 60 * sec - Math.PI / 2)
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(clockRaduis * 0.9, 0)
  ctx.shadowOffsetX = 1
  ctx.shadowColor = "#000"
  ctx.shadowBlur = 4
  ctx.lineWidth = 2
  ctx.strokeStyle = 'red'
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
  ctx.save()

  //圆心
  ctx.beginPath()
  ctx.arc(0, 0, 5, 0, 2 * Math.PI)
  ctx.fillStyle = 'red'
  ctx.fill()
  ctx.closePath()

  //绘制数字
  ctx.font = '18px Arial'
  ctx.fillStyle = '#000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle'
  for (let i = 1; i <= 12; i++) {
    const theta = Math.PI * 2 / 12 * (i - 3)
    const x = clockRaduis * 0.75 * Math.cos(theta)
    const y = clockRaduis * 0.75 * Math.sin(theta)
    ctx.fillText(i, x, y)
  }

  ctx.restore()
  ctx.restore()
}


