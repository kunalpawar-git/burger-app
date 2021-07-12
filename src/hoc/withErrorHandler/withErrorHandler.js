import React,{ Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component { 
        state = {
            error: null
        }
        componentWillMount () {
           this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.reqInterceptor = axios.interceptors.response.use(res => res,error => {
                this.setState({error:error});
            });
        }
        componentWillUnmount() {
             axios.interceptors.request.eject(this.reqInterceptor);
             axios.interceptors.request.eject(this.reqInterceptor); 
              
        }
        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render () {
            return (
                <Aux>
                    <Modal show= {this.state.error}
                           modalClosed={this.errorConfirmedHandler}>
                           {this.state.error ? this.state.error.message : null}
                        something didn't work!
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}
export default withErrorHandler;