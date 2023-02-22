import Picture from "../components/Picture";
import LogoDark from "../public/logo-dark.png";
import LogoLight from "../public/logo.png";

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

export const Secondary = () => <Picture {...propsPrimary} src={LogoDark} style={{backgroundColor: 'black', borderRadius:'18px 0 0 18px'}}/>
Secondary.storyName = "Dark"


