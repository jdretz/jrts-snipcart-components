module.exports = {
    title: 'Snipcart Components',
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json'
    ).parse
}