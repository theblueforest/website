import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nFooter } from "../i18n/footer"
import { FooterLayoutStyle } from "./Footer.style"
import { FooterValues } from "../values/footer"
import leaves6Image from "../../assets/leaves6.png"
import footerImage from "../../assets/footer.png"
import LinkedinImage from "../../assets/Linkedin.png"
import GithubImage from "../../assets/Github.png"
import { ForestsLayoutStyle } from "./Forests.style"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const FooterLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={FooterLayoutStyle.container}>
      <Kiwi.Text
        id={keyPrefix}
        children={i18nFooter.title}
        style={FooterLayoutStyle.title}
      />

      <Kiwi.Text id={keyPrefix} children={i18nFooter.subtitle} style={FooterLayoutStyle.subtitle}/>

      <Kiwi.Container style={FooterLayoutStyle.cardsContainer}>
        <Kiwi.Container style={FooterLayoutStyle.card}>
          <Kiwi.Text id={keyPrefix} children={i18nFooter.ariane} style={FooterLayoutStyle.cardTitle}/>
          <Kiwi.Text id={keyPrefix} children={i18nFooter.arianeRole} style={FooterLayoutStyle.cardSubtitle}/>
          <Kiwi.Text id={keyPrefix} children={i18nFooter.arianeEmail} style={FooterLayoutStyle.cardEmail}/>

          <Kiwi.Container style={FooterLayoutStyle.cardLogos}>
            <Kiwi.Image
              source={LinkedinImage}
              style={FooterLayoutStyle.cardLogo}
            />
          </Kiwi.Container>
        </Kiwi.Container>

        <Kiwi.Container style={FooterLayoutStyle.card}>
          <Kiwi.Text id={keyPrefix} children={i18nFooter.nazim} style={FooterLayoutStyle.cardTitle}/>
          <Kiwi.Text id={keyPrefix} children={i18nFooter.nazimRole} style={FooterLayoutStyle.cardSubtitle}/>
          <Kiwi.Text id={keyPrefix} children={i18nFooter.nazimEmail} style={FooterLayoutStyle.cardEmail}/>

          <Kiwi.Container style={FooterLayoutStyle.cardLogos}>
            <Kiwi.Image
              source={LinkedinImage}
              style={FooterLayoutStyle.cardLogo}
            />

            <Kiwi.Image
              source={GithubImage}
              style={FooterLayoutStyle.cardLogoGithub}
            />
          </Kiwi.Container>
        </Kiwi.Container>
      </Kiwi.Container>

      <Kiwi.Image source={leaves6Image} style={FooterLayoutStyle.leave}/>,

      <Kiwi.Text id={keyPrefix} children={i18nFooter.legalInformations} style={FooterLayoutStyle.legals}/>
      <Kiwi.Text id={keyPrefix} children={i18nFooter.copyright} style={FooterLayoutStyle.legals}/>

      <Kiwi.Image
        source={footerImage}
        style={FooterLayoutStyle.image}
      />
    </Kiwi.Container>
  }

})
