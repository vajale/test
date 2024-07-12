import React, { useMemo } from "react";
import {
  StyledGroupList,
  StyledPriceWrapper,
  StyledPriviligueItem,
} from "@/features/Donate/ui/DonateBlockWrapper/GroupList/styled";
import { useAppSelector } from "@/store/hooks";
import { selectPriviligueList } from "@/features/Donate/model/store/selectors";
import { IPrivilegue } from "@/features/Donate/model/store/types";

export const GroupList = () => {
  const priviligueList = useAppSelector(selectPriviligueList);

  const formPrviligueListNode = (priviligue: IPrivilegue) => {
    return (
      <StyledPriviligueItem>
        <img src={priviligue.imageUrl} alt={priviligue.id} />
        <StyledPriceWrapper>
          <div className={"sale"}>{priviligue.sale} руб</div>
          <div className={"real-price"}>{priviligue.price} руб</div>
        </StyledPriceWrapper>
      </StyledPriviligueItem>
    );
  };

  const ListNodes = useMemo(() => {
    return priviligueList.map((item) => {
      return formPrviligueListNode(item);
    });
  }, [priviligueList]);

  return <StyledGroupList>{ListNodes}</StyledGroupList>;
};
