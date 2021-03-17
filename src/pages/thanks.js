import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiCheckboxCircleLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <SEO title="Thank you"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <RiCheckboxCircleLine style={{
        fontSize: "128px",
        color: "var(--primary-color)"
      }}/>
      <h1>Mensagem Enviada!</h1>
      <p>Obrigado por sua mensagem. <br/>
      Recebo uma quantidade consideravel de mensagens todos os dias mas, faço questão de responder uma a uma. Então talvez leve um tempinho mas te responderei em no máximo 72h, combinado? </p>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Voltar para Pagina Inicial</Link>
    </div>

  </Layout>
)

export default Thanks