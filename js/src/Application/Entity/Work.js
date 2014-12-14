var Work = CommonContent.extend({
    client: null,
    date: null,
    technology: null,
    ux: {
        concern: null,
        design: null,
    },
    technical: {
        concern: null,
        design: null,
    },
    gallery: null,

    init: function (result) {
        if (angular.isObject(result)) {
            this._super({
                id: result.id,
                title: result.title,
                content: result.content,
                createAt: result.createdAt,
            });

            this.client = result.cilent;
            this.date = result.date;
            this.technology = result.technology;
            this.ux = result.ux;
            this.technical = result.technical;

            this.gallery = result.gallery,
        }
    }
});