import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from 'aphrodite';

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" className={css(styles.table, styles.th, styles.td, styles.tr)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true}/>
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
      </thead>
      <tbody>
        {listCourses ? (
          listCourses.map(({ id, name, credit}) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  table: {
      marginTop: "2em",
      width: "100%",
      border: "1px solid #ddd",
      fontSize: "1.2rem",
      marginBottom: "15em",
    },
    
    th: {
      borderBottom: "1px solid #ddd",
      width: "80%",
    },
    
    td: {
      width: "80%",
    },
    
    table: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    
    tr: {
      ":nth-child(2)": {
        textalign: "left",
      },
    },
})

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
