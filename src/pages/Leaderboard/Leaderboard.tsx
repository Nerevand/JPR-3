import React, { useState, useEffect } from "react";
import MaterialTable, { Column } from "material-table";
import { useSelector, useDispatch } from "react-redux";
import { useMount } from "react-use";

import { getResultsAction } from "./saga";

const columns: any = [
  { title: "Position", field: "position" },
  { title: "User", field: "username" },
  { title: "Time", field: "time" },
  { title: "Correct answers", field: "score" },
];

interface Row {
  position: number;
  username: string;
  time: string;
  score: string;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

interface RootState {
  results: any;
}

export default function Leaderbord() {
  const dispatch: any = useDispatch();
  const data = useSelector((state: RootState) => state.results);

  useMount(() => {
    dispatch(getResultsAction());
  });

  const [state, setState] = useState<TableState>({
    columns,
    data,
  });

  useEffect(() => {
    setState({ columns, data });
  }, [data]);

  return (
    <MaterialTable
      title="User Leaderboard"
      columns={state.columns}
      data={state.data}
    />
  );
}
