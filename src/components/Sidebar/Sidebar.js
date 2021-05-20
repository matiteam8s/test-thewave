import {
  Checkbox,
  FormControlLabel,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import {
  stars,
  utilizzo,
  potenzaNominale,
  alimentazione,
  tipologia,
  marche,
  scegliPer,
} from "../../data/sidebarData";
import StarRating from "./StarRating/StarRating";

const BlueCheckbox = withStyles({
  root: {
    color: "#5738FF",
  },
})((props) => <Checkbox color="default" {...props} />);

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3 className="sidebar__subtitle">CATEGORIE</h3>
        <h4 className="sidebar__subtitleBlue">Riscaldamento</h4>
        <div className="sidebar__riscaldamento">
          <Typography variant="body1" component="p">
            Casa e acqua
          </Typography>
          <Typography variant="body1" component="p">
            Casa
          </Typography>
          <Typography variant="body1" component="p">
            Acqua
          </Typography>
        </div>
      </div>
      <div className="sidebar__bottom">
        <h3 className="sidebar__subtitle">SCEGLI PER</h3>
        {scegliPer.map((s) => (
          <FormControlLabel
            key={s.name}
            control={<BlueCheckbox checked={s.checked} name={s.name} />}
            label={`${s.name} (${s.quantity})`}
            className="sidebar__items"
            style={{ color: s.checked && "#5738FF" }}
          />
        ))}

        <h3 className="sidebar__subtitle">MARCHE</h3>
        {marche.map((m) => (
          <FormControlLabel
            className="sidebar__items"
            key={m.name}
            control={<BlueCheckbox checked={m.checked} name={m.name} />}
            label={`${m.name} (${m.quantity})`}
            style={{ color: m.checked && "#5738FF" }}
          />
        ))}
        <h3 className="sidebar__subtitle">TIPOLOGIA</h3>
        {tipologia.map((t) => (
          <FormControlLabel
            className="sidebar__items"
            key={t.name}
            control={<BlueCheckbox checked={t.checked} name={t.name} />}
            label={`${t.name} (${t.quantity})`}
            style={{ color: t.checked && "#5738FF" }}
          />
        ))}
        <h3 className="sidebar__subtitle">ALIMENTAZIONE</h3>
        {alimentazione.map((a) => (
          <FormControlLabel
            className="sidebar__items"
            key={a.name}
            control={<BlueCheckbox checked={a.checked} name={a.name} />}
            label={`${a.name} (${a.quantity})`}
            style={{ color: a.checked && "#5738FF" }}
          />
        ))}
        <h3 className="sidebar__subtitle">POTENZA NOMINALE</h3>
        {potenzaNominale.map((pot) => (
          <FormControlLabel
            className="sidebar__items"
            key={pot.name}
            control={<BlueCheckbox checked={pot.checked} name={pot.name} />}
            label={`${pot.name} (${pot.quantity})`}
            style={{ color: pot.checked && "#5738FF" }}
          />
        ))}
        <h3 className="sidebar__subtitle">UTILIZZO</h3>
        {utilizzo.map((util) => (
          <FormControlLabel
            key={util.name}
            className="sidebar__items"
            control={<BlueCheckbox checked={util.checked} name={util.name} />}
            label={`${util.name} (${util.quantity})`}
            style={{ color: util.checked && "#5738FF" }}
          />
        ))}
        <h3 className="sidebar__subtitle">RECENSIONI</h3>
        {stars.map((stars) => (
          <FormControlLabel
            className="sidebar__items"
            key={stars.name}
            control={<BlueCheckbox checked={stars.checked} name={stars.name} />}
            label={
              <StarRating rating={stars.rating} quantity={stars.quantity} />
            }
            style={{ color: stars.checked && "#5738FF" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
