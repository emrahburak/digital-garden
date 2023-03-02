import Picture from "../components/Picture";
import LogoDark from "../public/logo-dark.png";
import LogoLight from "../public/logo.png";

import BlogCardImage from '../components/Picture/BlogCardImage'
import imageBC from '../static/image_bc.png';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Logo",
};

const propsPrimary = {
  src: LogoLight,
  alt: "logo",
  size: { width: 100, height: 100 },
};


export const Primary = () =>  <Picture {...propsPrimary}/>
Primary.storyName = "Light";

export const Secondary = () => <Picture {...propsPrimary} src={LogoDark} style={{backgroundColor: 'black', borderRadius:'8px 0 0 8px'}}/>
Secondary.storyName = "Dark"


const blogCardProps = {
  src: imageBC,
  alt: 'Blog Card Image',
}

export const CardImageDefault = () => <BlogCardImage {...blogCardProps} />