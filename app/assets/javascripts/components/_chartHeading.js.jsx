const ChartHeading = ({descTogg}) => (
    <tbody>
        <tr>
			<td className="table-heading">
				Site
			</td>

			<td className="table-heading untouchable">
				Rainfall  <ChartFlowButton togg={descTogg}/>
			</td>
		</tr>
	</tbody>
);