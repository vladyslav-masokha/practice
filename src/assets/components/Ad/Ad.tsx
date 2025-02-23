import styles from './Ad.module.scss'

const Ad = () => {
    const GIFS: string[] = [
        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmJyMzdnZDlubWp1cm9hcXFscjF4c29ubG83b3Noa2JhdGJ2NGwwdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0TTHyDFNMMxV04fFwK/giphy.gif',
        'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnUxa2FwNW9yZHMyZHNuOXdnNXk3enBhODZ4bmloMDQyM2NrbndhcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3Z1ReyLuL2F2/giphy.gif',
        'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTcxbnY1bWF6em5yMzJieG5kYnVmb3R2Ymtsd2tsaHg0Y3kwYm5iMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MZvqEbXdYvhvaSNTqL/giphy.gif'
    ];

    return (
        <div className={styles.ad}>
            {GIFS.map((item) => (<img src={item} alt="advertisment"/>))}
        </div>
    )
}

export { Ad }