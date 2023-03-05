import * as Text from '../components/Text';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Typography'
}

const payloadL = {
}

export const TitleL = () => <Text.TextTitle {...payloadL}>Blog Title</Text.TextTitle>

const payloadSm = {
  small: true
}

export const TitleSm = () => (
  <Text.TextTitle {...payloadSm}>Blog Title</Text.TextTitle>
)

const textBodyPayload = {
}

export const TextBodyRegular = () => (
  <Text.TextBody {...textBodyPayload}>
    coffee shaman pork belly Brooklyn hexagon man braid williamsburg prism 8-bit
    woke freegan. Organic stumptown 3 wolf moon, sartorial 8-bit echo park
    raclette lomo glossier viral. 8-bit copper mug mukbang, echo park skateboard
    knausgaard direct trade +1. Etsy portland sartorial food truck cliche. Jean
    shorts hella brunch, sartorial iPhone franzen sustainable cronut. Chillwave
    asymmetrical tattooed edison bulb, raclette pinterest skateboard swag.
  </Text.TextBody>
)

export const TextButtonRegular = () => (
  <Text.TextButton {...textBodyPayload}>Button Text</Text.TextButton>
)




export const TextTagRegular = () => (<Text.TextTag {...payloadL}>SomeTag SomeTag SomeTag</Text.TextTag>)


export const TextTagSmall = () => (<Text.TextTag {...payloadSm}>SomeTag SomeTag SomeTag</Text.TextTag>)



export const TextDateRegular = () => (<Text.TextDate {...payloadL}>{new Date().toUTCString()}</Text.TextDate>)


export const TextDateSm = () => (<Text.TextDate {...payloadSm}>{new Date().toUTCString()}</Text.TextDate>)




