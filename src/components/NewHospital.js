import React from 'react'
import { connect } from 'react-redux'
import { Form, Control } from 'react-redux-form'
import { Button, FieldGroup, Panel, ListGroupItem, ListGroup, FormControl, Modal } from 'react-bootstrap'
import { push } from 'react-router-redux'
import { saveModifyAction, dialogAction,fetchHospitalRecordAction } from '../actions'

class NewHospital extends React.Component {

    render() {
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
         * buttons
         */
        const buttons = (
            <div style={styles.Btn}>
                <Button style={styles.submitBtn} onClick={this.props.BackToList}> 返回医院列表</Button>
                &nbsp;&nbsp; &nbsp;&nbsp;
                <Button bsStyle="primary" onClick={this.props.SaveModify}>保 存</Button>
            </div>
        )
        /**
         * Opeeration result dailog
         */
        const dailog = (
            <div>
                <Modal show={this.props.showOpDialog} onHide={this.props.CloseDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>操作结果</Modal.Title>
                        <Modal.Body>
                            <h3>{this.props.ifAPISuccess ? '保存记录成功' : '保存记录失败'}</h3>
                        </Modal.Body>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button onClick={this.props.CloseDialog}>知道了</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )

        return (
            <Panel header="新建医院记录">
                <Form model="record">
                    <ListGroup>
                        <ListGroupItem>
                            <label>医院中文名 &nbsp;</label>
                            <Control.text
                                model="record.hospital.hospital_cn"
                                component={FieldGroup}
                                style={styles.textinput}
                                />
                        </ListGroupItem>
                        <ListGroupItem>
                            <label>医院英文名 &nbsp;</label>
                            <Control.text
                                model="record.hospital.hospital"
                                component={FieldGroup}
                                style={styles.textinput}
                                />
                        </ListGroupItem>
                        <ListGroupItem>
                            <label> 产科综合评分 &nbsp; 格式：纯数字, 无评分填0</label>
                            <Control.text
                                model="record.hospital.rating"
                                component={FieldGroup}
                                style={styles.textinput}
                                />
                        </ListGroupItem>
                        <ListGroupItem>
                            <label> 地址 &nbsp;</label>
                            <Control.text
                                model="record.hospital.address"
                                component={FieldGroup}
                                style={styles.textinput}
                                />
                        </ListGroupItem>
                        <ListGroupItem>
                            <label> 经纬度 &nbsp; (逗号隔开)</label>
                            <Control.text
                                model="record.hospital.geo"
                                component={FieldGroup}
                                style={styles.textinput}
                                />
                        </ListGroupItem>
                        <ListGroupItem>
                            <label> 顺产价格 &nbsp; 格式: 1000 USD</label>
                            <Control.text
                                model="record.hospital.price.normal"
                                component={FieldGroup}
                                style={styles.textinput}
                                />
                            <label> 剖腹产价格 &nbsp; 格式: 1000 USD</label>
                            <Control.text
                                model="record.hospital.price.csection"
                                component={FieldGroup}
                                style={styles.textinput}
                                />
                        </ListGroupItem>
                        <ListGroupItem>
                            <label> 主页图片URL &nbsp; </label>
                            <Control.text
                                model="record.hospital.main_image"
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
                                component={FormControl}
                                controlProps={{
                                    componentClass: 'textarea',
                                }}
                                style={styles.textareainput}
                                />
                        </ListGroupItem>
                    </ListGroup>
                </Form>
                <br />
                {buttons}
                {dailog}
            </Panel>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ifAPISuccess: state.mngtReducer.ifAPISuccess,
        showOpDialog: state.mngtReducer.showOpDialog,
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
            dispatch(fetchHospitalRecordAction())
        },
        CloseDialog: () => {        
            dispatch(dialogAction(false))
            dispatch(push('/list'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewHospital);