import * as Card from 'components/Card'
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


export const BlogCard = () =>  <Card.BlogCard {...props}>Test article test article test article</Card.BlogCard>

export const GardenCardBig = () => <Card.GardenCard.Big {...props}/>

export const GardenCardMiddle = () => <Card.GardenCard.Middle {...props}>Garden Card Middle </Card.GardenCard.Middle>

export const GardenCardSmall = () => <Card.GardenCard.Small {...props}>Garden Card Small </Card.GardenCard.Small>

export const GardenCardInner = () => <Card.GardenCard.Inner {...props}>Garden Card Inner</Card.GardenCard.Inner>

export const PortfolioCard = () => <Card.PortfolioCard {...props}>Tiny Card article</Card.PortfolioCard>
