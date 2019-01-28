import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "10px 5px",
    backgroundColor: "#F2E2BA",
    padding: "10px",
    height: "440px",
    boxSizing: "border-box",
    fontSize: "16px",
    overflowY: "auto"
  },
  paperTitle: {
    color: "white",
    fontSize: "36",
    padding: "10px"
  },
  source: {
    textAlign: "right"
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography className={classes.paperTitle} variant="h5" component="h3">
          ART
        </Typography>
        <Typography component="p">
          Art is a diverse range of human activities in creating visual,
          auditory or performing artifacts (artworks), expressing the author's
          imaginative, conceptual ideas, or technical skill, intended to be
          appreciated for their beauty or emotional power. In their most general
          form these activities include the production of works of art, the
          criticism of art, the study of the history of art, and the aesthetic
          dissemination of art. The three classical branches of art are
          painting, sculpture and architecture. Music, theatre, film, dance, and
          other performing arts, as well as literature and other media such as
          interactive media, are included in a broader definition of the arts.
          Until the 17th century, art referred to any skill or mastery and was
          not differentiated from crafts or sciences. In modern usage after the
          17th century, where aesthetic considerations are paramount, the fine
          arts are separated and distinguished from acquired skills in general,
          such as the decorative or applied arts.
        </Typography>
        <Typography className={classes.source}>
          from en.wikipedia.org/wiki/Art
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
