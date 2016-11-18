import React from 'react'
import { connect } from 'react-redux'
import { Form, actions, Control } from 'react-redux-form'
import { Button, FieldGroup, Panel, ListGroupItem, ListGroup, FormControl, Grid, Row, Col } from 'react-bootstrap'
import { push } from 'react-router-redux'
import { saveModifyAction } from '../actions'

class HospitalEditor extends React.Component {

    componentWillMount() {
        this.props.dispatch(actions.load('record', this.props.record))
    }

    render() {
        let { record } = this.props
        const styles = {
            textinput: {
                width: '100%',
            },
            Btn: {
                width: '50%',
                margin: '0 auto'
            },
            textareainput: {
                width: '100%',
            }
        }

        /**
         * cities
         */

        let cities = []
        for (let index = 0; index < record.hospital.cities.length; index++) {
            let city = (
                <Col xs={4} md={4} key={Date.now() + index}>
                    <ListGroupItem>
                        <label>城市名</label>
                        <Control.text
                            model={"record.hospital.cities[" + index + "].name"}
                            value={record.hospital.cities[index].name}
                            component={FieldGroup}
                            style={styles.textinput}
                            />
                        <label>两房一卫价格 &nbsp; </label>
                        <Control.text
                            model={"record.hospital.cities[" + index + "].room_2b1b"}
                            value={record.hospital.cities[index].room_2b1b}
                            component={FieldGroup}
                            style={styles.textinput}
                            />
                        <label>一房一卫价格 &nbsp; </label>
                        <Control.text
                            model={"record.hospital.cities[" + index + "].room_1b1b"}
                            value={record.hospital.cities[index].room_1b1b}
                            component={FieldGroup}
                            style={styles.textinput}
                            />
                    </ListGroupItem>
                </Col>
            )
            cities.push(city)
        }
        const citylist = (
            <Grid>
                <Row className="show-grid">
                    {cities}
                </Row>
            </Grid>
        )

        /**
         * doctors
         */
        let doctors = []
        for (let index = 0; index < record.hospital.doctors.length; index++) {
            let doctor = (
                <Col xs={6} md={6} key={Date.now() + index}>
                    <ListGroupItem>
                        <label>医生名</label>
                        <Control.text
                            model={"record.hospital.doctors[" + index + "].name"}
                            value={record.hospital.doctors[index].name}
                            component={FieldGroup}
                            style={styles.textinput}
                            />
                        <label> 顺产价格 &nbsp; </label>
                        <Control.text
                            model={"record.hospital.doctors[" + index + "].price_normal"}
                            value={record.hospital.doctors[index].price_normal}
                            component={FieldGroup}
                            style={styles.textinput}
                            />
                        <label>地址 &nbsp; </label>
                        <Control.text
                            model={"record.hospital.doctors[" + index + "].address"}
                            value={record.hospital.doctors[index].address}
                            component={FieldGroup}
                            style={styles.textinput}
                            />
                        <label>电话 &nbsp; </label>
                        <Control.text
                            model={"record.hospital.doctors[" + index + "].tel"}
                            value={record.hospital.doctors[index].tel}
                            component={FieldGroup}
                            style={styles.textinput}
                            />
                        <label> 合作医院 &nbsp; </label>
                        <Control.text
                            model={"record.hospital.doctors[" + index + "].hospital"}
                            value={record.hospital.doctors[index].hospital}
                            component={FieldGroup}
                            style={styles.textinput}
                            />
                        <label>性别 &nbsp; </label>
                        <Control.text
                            model={"record.hospital.doctors[" + index + "].sex"}
                            value={record.hospital.doctors[index].sex}
                            component={FieldGroup}
                            style={styles.textinput}
                            />
                        <label>是否讲中文 &nbsp; (是/否)</label>
                        <Control.text
                            model={"record.hospital.doctors[" + index + "].speak_cn"}
                            value={record.hospital.doctors[index].speak_cn}
                            component={FieldGroup}
                            style={styles.textinput}
                            />
                        <label>是否有中文助理 &nbsp; (是/否)</label>
                        <Control.text
                            model={"record.hospital.doctors[" + index + "].has_cn_assistant"}
                            value={record.hospital.doctors[index].has_cn_assistant}
                            component={FieldGroup}
                            style={styles.textinput}
                            />
                    </ListGroupItem>
                </Col>
            )
            doctors.push(doctor)
        }
        const doctorlist = (
            <Grid>
                <Row className="show-grid">
                    {doctors}
                </Row>
            </Grid>
        )

        return (
            <Panel header={"编辑医院 " + record.hospital.hospital + " 信息"}>
                <Form model="record">
                    <ListGroup>
                        <ListGroupItem>
                            <label>医院中文名 &nbsp;</label>
                            <Control.text
                                model="record.hospital.hospital_cn"
                                value={record.hospital.hospital_cn}
                                component={FieldGroup}
                                style={styles.textinput}
                                />
                        </ListGroupItem>
                        <ListGroupItem>
                            <label>医院英文名 &nbsp;</label>
                            <Control.text
                                model="record.hospital.hospital"
                                value={record.hospital.hospital}
                                component={FieldGroup}
                                style={styles.textinput}
                                />
                        </ListGroupItem>
                        <ListGroupItem>
                            <label> 产科综合评分 &nbsp; 格式：纯数字, 无评分填0</label>
                            <Control.text
                                model="record.hospital.rating"
                                value={record.hospital.rating}
                                component={FieldGroup}
                                style={styles.textinput}
                                />
                        </ListGroupItem>
                        <ListGroupItem>
                            <label> 地址 &nbsp;</label>
                            <Control.text
                                model="record.hospital.address"
                                value={record.hospital.address}
                                component={FieldGroup}
                                style={styles.textinput}
                                />
                        </ListGroupItem>
                        <ListGroupItem>
                            <label> 经纬度 &nbsp; (逗号隔开)</label>
                            <Control.text
                                model="record.hospital.geo"
                                value={record.hospital.geo}
                                component={FieldGroup}
                                style={styles.textinput}
                                />
                        </ListGroupItem>
                        <ListGroupItem>
                            <label> 顺产价格 &nbsp; 格式: 1000 USD</label>
                            <Control.text
                                model="record.hospital.price.normal"
                                value={record.hospital.price.normal}
                                component={FieldGroup}
                                style={styles.textinput}
                                />
                            <label> 剖腹产价格 &nbsp; 格式: 1000 USD</label>
                            <Control.text
                                model="record.hospital.price.csection"
                                value={record.hospital.price.csection}
                                component={FieldGroup}
                                style={styles.textinput}
                                />
                        </ListGroupItem>
                        <ListGroupItem>
                            <label> 主页图片URL &nbsp; </label>
                            <Control.text
                                model="record.hospital.main_image"
                                value={record.hospital.main_image}
                                component={FormControl}
                                controlProps={{
                                    componentClass: 'textarea',
                                }}
                                style={styles.textareainput}
                                />
                        </ListGroupItem>
                        <ListGroupItem>
                            <label> 滚动图片URL &nbsp; (逗号隔开)</label>
                            <Control.textarea
                                model="record.hospital.images"
                                value={record.hospital.images}
                                component={FormControl}
                                controlProps={{
                                    componentClass: 'textarea',
                                }}
                                style={styles.textareainput}
                                />
                        </ListGroupItem>
                        <br />
                        {citylist}
                        <br />
                        {doctorlist}
                    </ListGroup>
                </Form>
                <br />
                <div style={styles.Btn}>
                    <Button style={styles.submitBtn} onClick={this.props.BackToList}> 返回医院列表</Button>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                <Button bsStyle="primary" onClick={this.props.SaveModify}>保存修改</Button>
                </div>
            </Panel>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        record: state.hospitalModeledReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        BackToList: () => {
            dispatch(push('/list'))
        },
        SaveModify: () => {
            dispatch(saveModifyAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HospitalEditor);