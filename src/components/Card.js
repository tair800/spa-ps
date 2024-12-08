    import React from "react";
    import { useNavigate } from "react-router-dom";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

    const Card = ({ product, onLike, onDelete }) => {
    const navigate = useNavigate();

    const handleCardClick = (e) => {
        if (e.target.tagName === "BUTTON" || e.target.tagName === "svg" || e.target.tagName === "path") {
        return;
        }
        navigate(`/products/${product.id}`);
    };

    return (
        <div className="card" onClick={handleCardClick}>
        <img src={product.image} alt={product.title} className="card-image" />
        <h3>{product.title}</h3>
        <p className="card-description">{product.description}</p>
        <div className="card-actions">
            <button
            onClick={(e) => {
                e.stopPropagation(); 
                onLike(product.id);
            }}
            style={{
                color: product.liked ? "red" : "gray",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
            }}
            >
            <FontAwesomeIcon icon={faHeart} />
            </button>
            <button
            onClick={(e) => {
                e.stopPropagation(); 
                onDelete(product.id);
            }}
            style={{ marginLeft: "10px" }}
            >
            <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
        </div>
    );
    };

    export default Card;
