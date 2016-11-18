import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hospitalItemSelectedAction, fetchHospitalRecordAction } from '../actions'
import { ListGroup, ListGroupItem, Button, Col, Grid, Row, PageHeader } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class RecordList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchHospitalRecordAction())
    }

    render() {
        let listItem = ''
        if (this.props.ifReady) {
            listItem = this.props.records.map(
                (item) => {
                    return (
                        <ListGroupItem href="#"
                            onClick={this.props.selectHospital.bind(this, item.id)}
                            key={item.id}>
                            {item.hospital_cn}
                        </ListGroupItem>)
                }
            )
        }
        return (
            <div>
                <PageHeader>&nbsp; {'赴美生子计算器'}&nbsp;<small>后台维护系统</small></PageHeader>
                <Grid>
                    <br />
                    <Row>
                        <Col xs={6} md={4}>
                            <h4>{'共有医院记录  ' + this.props.records.length + ' 条'} </h4>
                        </Col>
                        <Col xs={6} md={6}>
                            <LinkContainer to={{ pathname: '/new', query: {} }}>
                                <Button bsStyle="primary">新建医院记录</Button>
                            </LinkContainer>
                        </Col>

                    </Row>
                    <br />
                    <Row>
                        <ListGroup>
                            {listItem}
                        </ListGroup>
                    </Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        records: state.mngtReducer.records,
        ifReady: state.mngtReducer.ifReady,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        selectHospital: (id) => {
            let payload = {
                value: id
            }
            dispatch(hospitalItemSelectedAction(payload))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordList)