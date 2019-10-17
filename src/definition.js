define([], function () {

  var aboutDefinition = {
    component: 'items',
    label: 'About',
    items: {
      header: {
        label: 'My Extension',
        style: 'header',
        component: 'text'
      },
      paragraph1: {
        label: `This is my extension`,
        component: 'text'
      },
      paragraph2: {
        label: 'This extension was created by Riley MacDonald.',
        component: 'text'
      }
    }
  };

  return {
    type: "items",
    component: "accordion",
    items: {
      about: aboutDefinition
    }
  };
});