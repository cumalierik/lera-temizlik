import React from 'react'
import "../AdvanceSearch/search.css"
import { Container, Row,Col } from 'react-bootstrap'

const AdvanceSearch = () => {
  return (
    <>
    <section className='box-search-advance'>
        <Container>
            <Row>
                <Col md={12} xs={12} >
                  <div className="box-search">

                    <div className='items-search'>

                    </div>
                    <div className='items-search items-search-2'>
                      <label className='items-search-label'> check in </label>
                    </div>
                    <div className='items-search items-search-2'>
                      <label className='items-search-label'> check in</label>
                    </div>
                    <div className='items-search'>

                    </div>
                    <div className='items-search'>

                    </div>

                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default AdvanceSearch