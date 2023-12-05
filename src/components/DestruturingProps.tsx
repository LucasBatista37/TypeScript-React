interface Props {
    title: string;
    content: string
    commentsQty: number
    tags: string[]
    category: Category
}

export enum Category{
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python"
}

const DestruturingProps = ({title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map(tag =>(
          <span>#{tag}</span>
        ))}
      </div>
      <p>Categoria: {category}</p>
    </div>
  )
}

export default DestruturingProps