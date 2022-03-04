import React from "react"
import { client, Field, Query } from "@tilework/opus";
import { useParams } from "react-router-dom";
import Products from "./Products/Products";

function ProductListPageContainer() {
    const { id } = useParams();
    return (
        <div>
            <ProductListPage id={id} />
        </div>
    );
}

class ProductListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const getCategories = async () => {
            const query = new Query('categories', true)
                .addFieldList(['name'])
                .addField(new Field('products', true)
                    .addFieldList(['id', 'name'])
                )
            let result = await client.post(query)
            let categories = result.categories
            this.setState({ categories })
        }
        getCategories()
    }

    render() {
        return (
            <div>
                <Products categories={this.state.categories} id={this.props.id}/>
            </div>
        )
    }
}

export default ProductListPageContainer