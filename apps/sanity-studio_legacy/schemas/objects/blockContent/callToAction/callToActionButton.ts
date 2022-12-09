/**
 * Action button for the «callToAction» object
 */
export default {
    name: "callToActionButton",
    title: "Action Button",
    type: "object",
    validation: (Rule: { required: () => any }) => Rule.required(),
    fields: [
        {
            name: "label",
            title: "Label",
            type: "string",
            validation: (Rule: { required: () => any }) => Rule.required(),
        },
        {
            name: "url",
            title: "Url",
            type: "url",
            validation: (Rule) =>
                Rule.uri({
                    allowRelative: true,
                    scheme: ["https", "http", "mailto", "tel"],
                }).required(),
        },
    ],
};
