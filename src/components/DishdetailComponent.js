import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dishDetail) {
        if (dishDetail != null) {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dishDetail.image} alt={dishDetail.name}/>
                            <CardBody>
                                <CardTitle> {dishDetail.name} </CardTitle>
                                <CardText>{dishDetail.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dishDetail.comments)}
                    </div>
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }

    renderComments(comments) {
        if (comments != null) {
            const cmts = comments.map(cmt => {
                return(
                    <div>
                        <li>{cmt.comment}</li><br/>
                        <li>-- {cmt.author}, {this.renderDate(cmt.date)}</li><br />
                    </div>
                )
            });
            return(
                <ul className="list-unstyled">
                {cmts}
                </ul>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }

    renderDate(date) {
        const option = {year: 'numeric', month: 'short', day: 'numeric' };
        const date1 = new Date(date)
        const newdate = date1.toLocaleDateString("en-US", option)
        return newdate;
    }
    
    render() {
        const {dishDetail} = this.props;
        return (
            <div className="row">
                {this.renderDish(dishDetail)}
            </div>
        );
    }
}

export default DishDetail
