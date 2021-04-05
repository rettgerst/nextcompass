import canvas, { loadImage } from 'canvas';
import { Results } from 'types';

export default async function drawCompassOnCanvas(
	ctx: CanvasRenderingContext2D | canvas.CanvasRenderingContext2D,
	results: Results,
	backgroundUrl = '/compass.png'
) {
	const { right: x_axis, auth: y_axis, prog: z_axis } = results;

	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	const background = await loadImage(backgroundUrl);

	ctx.fillStyle = '#EEEEEE';
	ctx.fillRect(0, 0, 1850, 1600);
	ctx.drawImage((background as any) as HTMLImageElement, 0, 0);

	ctx.beginPath();
	ctx.arc(
		200 + (1000 * (x_axis + 10)) / 20,
		1150 - (1000 * (y_axis + 10)) / 20,
		25,
		0,
		2 * Math.PI
	);
	ctx.fillStyle = 'red';
	ctx.fill();
	ctx.stroke();

	ctx.moveTo(1500, 1145 - (1000 * (z_axis + 10)) / 20);
	ctx.lineTo(1650, 1145 - (1000 * (z_axis + 10)) / 20);
	ctx.lineWidth = 10;
	ctx.strokeStyle = 'red';
	ctx.stroke();

	ctx.font = '50px sans-serif';
	ctx.textAlign = 'center';
	ctx.fillStyle = '#222222';
	ctx.fillText(`Left / Right Axis (x): ${x_axis}`, 725, 1375);
	ctx.fillText(`Auth / Lib Axis (y): ${y_axis}`, 725, 1450);
	ctx.fillText(`Prog / Con Axis (z): ${z_axis}`, 725, 1525);

	ctx.textAlign = 'right';
	ctx.font = '60px sans-serif';
	ctx.fillText('nextcompass.vercel.app', 1820, 1560);
}
