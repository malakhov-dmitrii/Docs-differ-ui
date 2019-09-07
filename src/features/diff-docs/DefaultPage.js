import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./redux/actions";
import AppBar from "@material-ui/core/AppBar";
import { Card, Container, makeStyles, Toolbar, Tooltip, Typography } from "@material-ui/core";

const data = [
  {
    type: "tag",
    repeat: 1,
    tag: "br"
  },
	{
		type: "blank",
		text: `You"re going to hear a genuine BBC news report from 28 June, 2016. Before you listen, read these three summaries:`
	},
  {
    type: "tag",
    repeat: 2,
    tag: "br"
  },
	{
		type: "blank",
		text: `1. European leaders will be discussing Britain"s future relationship with the EU in meetings with the British prime minister.`
	},
  {
    type: "tag",
    repeat: 2,
    tag: "br"
  },
	{
		type: "blank",
		text: `2. European leaders will not be discussing Britain"s future relationship with the EU in meetings with the British prime minister.
        
        3. `
	},
  {
    type: "tag",
    repeat: 2,
    tag: "br"
  },
	{
		type: "blank",
		text: `2. European leaders will not be discussing Britain"s future relationship with the EU in meetings with the British prime minister.`
	},
  {
    type: "tag",
    repeat: 2,
    tag: "br"
  },
	{
		type: "blank",
		text: `3. `
	},
	{
        type: "choice",
        value: null,
        arr: [
            {
                date: new Date(23 * 3600 * 1000),
                document: "one",
                text: "European"
            },
            {
                date: new Date(24 * 3600 * 1000),
                document: "two",
                text: "European"
            }
        ]
    },
	[
		{
			type: "tumblr",
            date: new Date(23 * 3600 * 1000),
            document: "one",
			switch: false,
			data: {
				type: "blank",
				text: ` leaders will be starting the process of Britain leaving the EU in meetings with the British prime minister.

                Step 2: Learn the key words and listen again
                How was that? Try listening again. Here are three definitions of key vocabulary items which may help you.
                
                face
                (here) deal with
                
                triggers
                starts a process
                
                mechanism
                (here) way of doing something; process`
			}
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
			type: "tumblr",
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
					type: "choice",
                    value: null,
					arr: [
						{
                            date: new Date(23 * 3600 * 1000),
                            document: "one",
                            text: "learn"
                        },
                        {
                            date: new Date(24 * 3600 * 1000),
                            document: "two",
                            text: "Learn"
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


const useStyles = makeStyles({
  card: {
    marginTop: 100,
    padding: 50,
  },
  header: {
    // fontSize: "2rem"
    marginBottom: 30,
  },
  tooltip: {
    backgroundColor: "black",
    color: "white"
  },
});

// <Tooltip title={"Changed here"}><Typography display="inline" className={classes.tooltip}>Accusamus eaque esse</Typography></Tooltip>

export const DefaultPage = () => {
  const classes = useStyles();

  const renderTag = (data) => {
    switch(data.tag) {
      case "br":
        return <br />;
    }
  }

  const loop = (data) => {
    console.log(data)
    if (Array.isArray(data)) {
      return data.map(item => {
        if ((typeof item == "object") && !Array.isArray(item)) {
          switch(item.type) {
            case "blank":
              return item.text;
            case "tag":
              return renderTag(item);
            default:
              return "";
          }
        }else if (Array.isArray(item)) {
          return loop(item);
        }
      });
    }
  };

  const renderData = (data) => {
    return (
      <Container maxWidth="lg">
        <Card className={classes.card}>
          <div>
            <Typography>
              {loop(data)}
            </Typography>
          </div>
        </Card>
      </Container>
    );
  };

  return (
    <div>
      <AppBar>
        <Toolbar>
          <h2>Diff docs</h2>
        </Toolbar>
      </AppBar>
      {renderData(data)}
    </div>
    );
}

DefaultPage.propTypes = {
  diffDocs: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    diffDocs: state.diffDocs,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
