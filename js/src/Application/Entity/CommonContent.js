var CommonContent = Class.extend({
    id: null,
    title: null,
    content: null,
    createAt: null,

    init: function (content) {
        this.id = content.id;
        this.title = content.title;
        this.content = content.content;
        this.createdAt = content.createdAt;
    }
});

return CommonContent;