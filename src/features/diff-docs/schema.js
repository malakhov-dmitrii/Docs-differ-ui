const Schema = [
  [
    {
      type: "blank",
      text: `You"re going to hear a genuine BBC news report from 28 June, 2016. Before you listen, read these three summaries:`
    }
  ],
  [
    {
      type: "tag",
      tag: "b",
      data: [
            {
                type: "blank",
                text: `1`
            }
      ]
    },
    {
      type: "tag",
      tag: "u",
      data: [
            {
                type: "blank",
                text: `. 1European leaders will be discussing Britain"s future relationship with the EU in meetings with the British prime minister.`,
            }
      ]
    }
  ],
  [
    {
      type: "tag",
      tag: "b",
      data: [
            {
                type: "blank",
                text: `2`
            }
      ]
    },
    {
      type: "tag",
      tag: "i",
      data: [
            {
                text: `. European leaders will not be discussing Britain"s future relationship with the EU in meetings with the British prime minister.`,
                type: "blank",
            }
      ]
    }
  ],
  [
    {
      type: "tag",
      tag: "b",
      data: [
            {
                type: "blank",
                text: `3`
            }
      ]
    },
    {
      type: "blank",
      text: `. `
    },
    {
      type: "choose",
      value: false,
      options: [
          {
              date: new Date(23 * 3600 * 1000),
              document: "one",
              text: "European"
          },
          {
              date: new Date(24 * 3600 * 1000),
              document: "two",
              text: "USA"
          }
      ]
    },
		{
			type: "add",
      date: new Date(23 * 3600 * 1000),
      document: "one",
			switch: false,
			data: [
        {
          type: "blank",
          text: ` leaders will be starting the process of Britain leaving the EU in meetings with the British prime minister.`
        },
        {
          type: "tag",
          repeat: 2,
          tag: "br"
        },
        {
          type: "blank",
          text: `Step 2: Learn the key words and listen again`
        },
        {
          type: "tag",
          repeat: 1,
          tag: "br"
        },
        {
          type: "blank",
          text: ` How was that? Try listening again. Here are three definitions of key vocabulary items which may help you.`
        },
        {
          type: "tag",
          repeat: 2,
          tag: "br"
        },
        {
          type: "blank",
          text: ` face
                  (here) deal with
                  
                  triggers
                  starts a process
                  
                  mechanism
                  (here) way of doing something; process`
        }
      ]
		},
		{
			type: "blank",
			text: `

            Step 3: Transcript and answer
            The British Prime Minister David Cameron will face European leaders at an emergency meeting in Brussels shortly for the first time since Britain voted to leave the EU.
            
            The leaders of Germany, France and Italy have said there will be no talks on Britain"s future relationship with the EU until the government in London triggers the formal legal mechanism to leave. 
            
            Answer
            2. European leaders will not be discussing Britain"s future relationship with the EU in meetings with the British prime minister.`
		},
    {
      type: "tag",
      repeat: 2,
      tag: "br"
    },
		{
			type: "remove",
            date: new Date(24 * 3600 * 1000),
            document: "two",
			switch: false,
			data: [
				{
					type: "blank",
					text: ` leaders will be starting the process of Britain leaving the EU in meetings with the British prime minister.

                    Step 2: `
				},
				{
					type: "choose",
                    value: false,
					options: [
						{
                            date: new Date(23 * 3600 * 1000),
                            document: "one",
                            text: "learn"
                        },
                        {
                            date: new Date(24 * 3600 * 1000),
                            document: "two",
                            text: "Keart"
                        }
					]
				},
				{
					type: "blank",
					text: ` the key words and listen again
                    How was that? Try listening again. Here are three definitions of key vocabulary items which may help you.
                    
                    face
                    (here) deal with
                    
                    triggers
                    starts a process
                    
                    mechanism
                    (here) way of doing something; process`
				}
			]
		}
  ]
];

export default Schema;
