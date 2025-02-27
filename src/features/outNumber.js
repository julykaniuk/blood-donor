export const time = 1000;
export const step = 1000;

export function outNum(num, elem) {
    const element = document.querySelector('#'+elem);
    let n = 0;
    const intervalTime = Math.round(time / (num / step));
    const interval = setInterval(() => {
        n += step;
        if (n >= num) {
            clearInterval(interval);
            n = num;
        }
        element.innerHTML = n;
    }, intervalTime);
}
