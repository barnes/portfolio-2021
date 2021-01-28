export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'link',
        title: 'Link',
        type: 'string',
      },
      {
        name: 'github',
        title: 'Github',
        type: 'string',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'string',
      },
    ],
  }
  