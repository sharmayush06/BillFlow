package com.ayush.bill_flow.dto.dashboard;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DateRangeRequest {

    private Long shopId;

    private LocalDateTime starts;

    private LocalDateTime ends;
}
