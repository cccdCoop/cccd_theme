import React from "react"

import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class = "home-view"> 
        <div class="home-view-header">
            <img alt="Coop Homecare" class="home-view-image" src="https://p1.piqsels.com/preview/912/170/539/warm-moved-the-years-cover-hand-love-life.jpg"></img>
            <div class="home-view-title"> Co-op Homecare </div>
        </div>
        
        <div class="home-view-content">
            We’re a local home care cooperative!  Call or email us for a FREE consultation to review Care Options. 
            <br/><br/>
            <b>Co-op Homecare</b> is a worker-owned cooperative dedicated to providing the highest quality of care for our clients.
            Caregivers co-own and democratically control the business.  The worker-owned model provides us with a compassionate 
            workplace that promotes worker dignity, we incorporate these values into the work we do every day.
            
            <br/><br/>
            We provide homecare services throughout most areas of Yolo County.  Our cooperative is fully licensed, and insured. 
            All caregivers are trained, first-aid certified, and have passed a background check.
            
            <br/><br/>
            <b>As a cooperative, our team of caregivers work together to provide compassionate, high quality 
            in-home support services. Our business model emphasizes kindness to workers and kindness to clients. </b>
        </div>
    </div>
    
    <Sidebar />
  </Layout>
)

export default IndexPage
