import Card from '../components/Card'
import * as Icon from '../components/Icon'
import BlogCardImage from '../static/image_bc.png'

export default {
  title: 'Card'
}

const props = {
  title: 'Blog Title',
  path: `${BlogCardImage}`,
  date: `${new Date().toISOString()}`,
  tags: ['fp', 'oop'],
  icon: <Icon.Read />
}


export const CardDefault = () =>  <Card type='big' {...props}>Test article test article test article</Card>
