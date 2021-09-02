module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("goods", {
            title: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING(1000)
            },
            color: {
                type: Sequelize.STRING
            },
            volume: {
                type: Sequelize.INTEGER
            },
            material: {
                type: Sequelize.STRING
            },
            complectation: {
                type: Sequelize.STRING
            },
            image_first: {
                type: Sequelize.STRING
            },
            image_second: {
                type: Sequelize.STRING
            },
            image_third: {
                type: Sequelize.STRING
            },
            image_fourth: {
                type: Sequelize.STRING
            },
            image_fifth: {
                type: Sequelize.STRING
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_unicode_ci'
        });
    return Tutorial;
};
