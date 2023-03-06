import * as Card from '../components/Card'
import BlogCardImage from '../static/image_bc.png'

export default {
  title: 'Card'
}

const props = {
  title: 'Blog Title',
  path: `${BlogCardImage}`,
  date: `${new Date().toISOString()}`,
  tags: ['fp', 'oop'],

}


export const BigCard = () =>  <Card.BigCard {...props}>Test article test article test article</Card.BigCard>

export const MiddleCard = () => <Card.MiddleCard {...props}>Middle Card  cart </Card.MiddleCard>

export const SmallCard = () => <Card.SmallCard {...props}>Small Card article</Card.SmallCard>

export const TinyCard = () => <Card.TinyCard {...props}>Tiny Card article</Card.TinyCard>
