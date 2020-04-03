const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if(node.internal.type === 'MarkdownRemark') {
        //console.log("$$$");
        //console.log(JSON.stringify(node, undefined, 4));

        // if(node.frontmatter.createNewPage === 'yes') {
        //     console.log(JSON.stringify(node, undefined, 4));
        // }

        const slug = path.basename(node.fileAbsolutePath, '.md');

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');
    const courseTemplate = path.resolve('./src/templates/course.js');
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            templateKey
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        if(edge.node.frontmatter.templateKey == "course-page") {
            createPage({
                component: courseTemplate,
                path: `/course/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        } else if (edge.node.frontmatter.templateKey == "news-post") {
            createPage({
                component: blogTemplate,
                path: `/blog/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        }
        // createPage({
        //     component: blogTemplate,
        //     path: `/blog/${edge.node.fields.slug}`,
        //     context: {
        //         slug: edge.node.fields.slug
        //     }
        // })
    })

}