import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Control } from 'react-redux-form'
import { Button, FieldGroup, Panel, ListGroupItem, ListGroup, Modal } from 'react-bootstrap'
import { cityDialogCloseAction, cityDialogAddAction } from '../actions'

class CityDialog extends Component {
    /**
 * dialog for add new city
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
                <Modal show={this.props.showCityDialog} onHide={this.props.CloseDialog}>
                    <Modal.Header closeButton>
                        <Modal.Body>
                            <Panel header="新建城市记录">
                                <Form model="dialog">
                                    <ListGroup>
                                        <ListGroupItem>
                                            <label>城市名 &nbsp;</label>
                                            <Control.text
                                                model="dialog.city.name"
                                                component={FieldGroup}
                                                style={styles.textinput}
                                                />
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <label>两房一卫价格 &nbsp; 格式 1000 USD</label>
                                            <Control.text
                                                model="dialog.city.room_2b1b"
                                                component={FieldGroup}
                                                style={styles.textinput}
                                                />
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <label>一房一卫价格 &nbsp; 格式 1000 USD</label>
                                            <Control.text
                                                model="dialog.city.room_1b1b"
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
                            <Button onClick={this.props.closeDialog}>取 消</Button> &nbsp;&nbsp;
                            <Button bsStyle="primary" onClick={this.props.addCity}>添 加</Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showCityDialog: state.dialogModeledReducer.showCityDialog,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        closeDialog: () => {
            dispatch(cityDialogCloseAction())
        },
        addCity: () => {
            dispatch(cityDialogAddAction())
            dispatch(cityDialogCloseAction())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityDialog);
