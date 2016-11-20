import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Control } from 'react-redux-form'
import { Button, FieldGroup, Panel, ListGroupItem, ListGroup, Modal } from 'react-bootstrap'
import { doctorDialogCloseAction, doctorDialogAddAction } from '../actions'

class DoctorDialog extends Component {
    /**
 * dialog for add new doctor
 */

    render() {
        const styles = {
            textinput: {
                width: '100%',
            },
            Btn: {
                width: '60%',
                margin: '0 auto'
            },
        }
        return (
            <div>
                <Modal show={this.props.showDoctorDialog} onHide={this.props.CloseDialog}>
                    <Modal.Header closeButton>
                        <Modal.Body>
                            <Panel header="新建医生记录">
                                <Form model="dialog">
                                    <ListGroup>
                                        <ListGroupItem>
                                            <label>姓名 &nbsp; 格式：英文 中文</label>
                                            <Control.text
                                                model="dialog.doctor.name"
                                                component={FieldGroup}
                                                style={styles.textinput}
                                                />
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <label>性别 &nbsp; </label>
                                            <Control.text
                                                model="dialog.doctor.sex"
                                                component={FieldGroup}
                                                style={styles.textinput}
                                                />
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <label>顺产价格 &nbsp; 格式 1000 USD</label>
                                            <Control.text
                                                model="dialog.doctor.price_normal"
                                                component={FieldGroup}
                                                style={styles.textinput}
                                                />
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <label>剖腹产价格 &nbsp; 格式 1000 USD</label>
                                            <Control.text
                                                model="dialog.doctor.csection"
                                                component={FieldGroup}
                                                style={styles.textinput}
                                                />
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <label>地址 &nbsp;</label>
                                            <Control.text
                                                model="dialog.doctor.address"
                                                component={FieldGroup}
                                                style={styles.textinput}
                                                />
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <label>电话 &nbsp;</label>
                                            <Control.text
                                                model="dialog.doctor.tel"
                                                component={FieldGroup}
                                                style={styles.textinput}
                                                />
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <label>服务医院 &nbsp; 逗号隔开</label>
                                            <Control.text
                                                model="dialog.doctor.hospital"
                                                component={FieldGroup}
                                                style={styles.textinput}
                                                />
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <label>是否说中文 &nbsp;</label>
                                            <Control.text
                                                model="dialog.doctor.speak_cn"
                                                component={FieldGroup}
                                                style={styles.textinput}
                                                />
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <label>是否有中文助理 &nbsp; </label>
                                            <Control.text
                                                model="dialog.doctor.has_cn_assistant"
                                                component={FieldGroup}
                                                style={styles.textinput}
                                                />
                                        </ListGroupItem>
                                    </ListGroup>
                                </Form>
                            </Panel>
                        </Modal.Body>
                    </Modal.Header>
                    <Modal.Footer>
                        <div style={styles.Btn}>
                            <Button onClick={this.props.closeDialog}>取 消</Button>&nbsp;&nbsp;
                            <Button bsStyle="primary" onClick={this.props.addDoctor}>添 加</Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showDoctorDialog: state.dialogModeledReducer.showDoctorDialog,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        closeDialog: () => {
            dispatch(doctorDialogCloseAction())
        },
        addDoctor: () => {
            dispatch(doctorDialogAddAction())
            dispatch(doctorDialogCloseAction())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDialog);
