export default function randomf(min: number, max: number): number {
  return min + Math.random() * (max - min);
}