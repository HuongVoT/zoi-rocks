import InfiniteScroll from "react-infinite-scroll-component";
import { useCallback, useEffect, useState } from "react";
import { Empty, Spin, notification } from "antd";

import {
  StyledKudosList,
  StyledKudosListContainer,
  StyledEmptyContainer,
  StyledDivider,
  StyledSkeleton,
} from "./kudos-list-container.style";
import { KudosItem } from "../../components";
import { useAppDispatch, useAppSelector, kudosAction } from "../../../redux";
import { models, dtos } from "../../../domain";
import { ActionStatus, DefaultParams } from "../../../utils";
import { FilterModalContainer } from "../kudos-filter-container";

export interface FilterFormProps {
  startDate: string;
  endDate: string;
  category: string;
  receiver: string;
  sender: string;
}

export const KudosListContainer = () => {
  const [submittedData, setSubmittedData] = useState<FilterFormProps>({
    startDate: "",
    endDate: "",
    category: "",
    receiver: "",
    sender: "",
  });

  const [api, contextHolder] = notification.useNotification();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.kudos);
  const listKudos: models.Kudos[] = state.kudos;
  const isPagination = state.pagination?.lastKey ? true : false;
  const isLoadingMore = state.isLoadingMore;

  const loadMore = useCallback(() => {
    if (state.listKudosStatus === ActionStatus.PENDING) return;

    const listKudosDTO: dtos.ListKudosDTO = {
      limit: DefaultParams.LIST_KUDOS_LIMIT,
      lastKey: state.pagination?.lastKey,
    };

    for (const [key, value] of Object.entries(submittedData)) {
      if (value) {
        listKudosDTO.filter = {
          ...listKudosDTO.filter,
          [key]: value,
        };
      }
    }

    dispatch(kudosAction.listKudos({ dto: listKudosDTO, isLoadingMore: true }));
  }, [
    dispatch,
    state.listKudosStatus,
    state.pagination?.lastKey,
    submittedData,
  ]);

  useEffect(() => {
    dispatch(
      kudosAction.listKudos({
        dto: { limit: DefaultParams.LIST_KUDOS_LIMIT },
        isLoadingMore: false,
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    const listKudosDTO: dtos.ListKudosDTO = {
      limit: DefaultParams.LIST_KUDOS_LIMIT,
    };

    for (const [key, value] of Object.entries(submittedData)) {
      if (value) {
        listKudosDTO.filter = {
          ...listKudosDTO.filter,
          [key]: value,
        };
      }
    }

    dispatch(
      kudosAction.listKudos({ dto: listKudosDTO, isLoadingMore: false }),
    );
  }, [dispatch, submittedData]);

  useEffect(() => {
    if (state.listKudosStatus === ActionStatus.ERROR) {
      api.error({
        message: "Failed to load kudos!",
        description: state.error.message,
      });
    }
  }, [api, state.error.message, state.listKudosStatus]);

  return (
    <>
      {contextHolder}
      <FilterModalContainer
        submittedDataFilter={submittedData}
        setSubmittedDataFilter={setSubmittedData}
      />
      {!isLoadingMore && state.listKudosStatus === ActionStatus.PENDING ? (
        <StyledEmptyContainer>
          <Spin size="large" />
        </StyledEmptyContainer>
      ) : (
        <StyledKudosListContainer id="scrollableList">
          {listKudos.length > 0 ? (
            <InfiniteScroll
              dataLength={listKudos.length}
              next={loadMore}
              hasMore={isPagination}
              loader={<StyledSkeleton avatar paragraph={{ rows: 2 }} active />}
              endMessage={
                <StyledDivider plain>No older kudos! 😘</StyledDivider>
              }
              scrollableTarget="scrollableList"
            >
              <StyledKudosList
                dataSource={listKudos}
                renderItem={(kudos) => (
                  <KudosItem kudos={kudos as models.Kudos} />
                )}
              />
            </InfiniteScroll>
          ) : (
            <StyledEmptyContainer>
              <Empty />
            </StyledEmptyContainer>
          )}
        </StyledKudosListContainer>
      )}
    </>
  );
};
