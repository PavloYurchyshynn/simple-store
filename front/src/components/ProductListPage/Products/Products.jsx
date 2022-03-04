import React from "react"

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const productName = this.props.id

        const products = this.props.categories.filter(e => e.name === productName)

        console.log(products);

        return (
            <div>
                <div>
                    {productName}
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Products