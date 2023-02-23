import TextTitle from '../components/Text/TextTitle'
import TextBody from '../components/Text/TextBody'
import TextButton from '../components/Text/TextButton'
import TextTag from '../components/Text/TextTag';
import TextDate from '../components/Text/TextDate';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Typography'
}

const payloadL = {
  className: null,
  small: null
}

export const TitleL = () => <TextTitle {...payloadL}>Blog Title</TextTitle>

const payloadSm = {
  className: null,
  small: true
}

export const TitleSm = () => (
  <TextTitle {...payloadSm}>Blog Title</TextTitle>
)

const textBodyPayload = {
  className: null
}

export const TextBodyRegular = () => (
  <TextBody {...textBodyPayload}>
    coffee shaman pork belly Brooklyn hexagon man braid williamsburg prism 8-bit
    woke freegan. Organic stumptown 3 wolf moon, sartorial 8-bit echo park
    raclette lomo glossier viral. 8-bit copper mug mukbang, echo park skateboard
    knausgaard direct trade +1. Etsy portland sartorial food truck cliche. Jean
    shorts hella brunch, sartorial iPhone franzen sustainable cronut. Chillwave
    asymmetrical tattooed edison bulb, raclette pinterest skateboard swag.
  </TextBody>
)

export const TextButtonRegular = () => (
  <TextButton {...textBodyPayload}>Button Text</TextButton>
)




export const TextTagRegular = () => (<TextTag {...payloadL}>SomeTag SomeTag SomeTag</TextTag>)


export const TextTagSmall = () => (<TextTag {...payloadSm}>SomeTag SomeTag SomeTag</TextTag>)



export const TextDateRegular = () => (<TextDate {...payloadL}>{new Date().toUTCString()}</TextDate>)


export const TextDateSm = () => (<TextDate {...payloadSm}>{new Date().toUTCString()}</TextDate>)




